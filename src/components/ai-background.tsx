"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField({ mode }: { mode: number }) {
    const ref = useRef<THREE.Points>(null);

    // Generate particles
    const count = 2000;
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Rotate the entire field
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;

            // Pulse effect based on mode
            const time = state.clock.getElapsedTime();
            const scale = 1 + Math.sin(time * (mode + 1)) * 0.05;
            ref.current.scale.set(scale, scale, scale);
        }
    });

    // Color based on mode - warm white tones
    const color = useMemo(() => {
        switch (mode) {
            case 0: return "#f5f5dc"; // Warm beige for AI
            case 1: return "#faf0e6"; // Linen white for ML
            case 2: return "#ffd700"; // Gold for GenAI
            default: return "#ffffff";
        }
    }, [mode]);

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={color}
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

function Connections({ mode }: { mode: number }) {
    const ref = useRef<THREE.LineSegments>(null);
    const count = 100; // Fewer lines for performance

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 6); // 2 points per line * 3 coords
        const colors = new Float32Array(count * 6);

        for (let i = 0; i < count; i++) {
            // Start point
            positions[i * 6] = (Math.random() - 0.5) * 8;
            positions[i * 6 + 1] = (Math.random() - 0.5) * 8;
            positions[i * 6 + 2] = (Math.random() - 0.5) * 8;

            // End point (connected to start)
            positions[i * 6 + 3] = positions[i * 6] + (Math.random() - 0.5) * 2;
            positions[i * 6 + 4] = positions[i * 6 + 1] + (Math.random() - 0.5) * 2;
            positions[i * 6 + 5] = positions[i * 6 + 2] + (Math.random() - 0.5) * 2;

            // Colors
            for (let j = 0; j < 6; j++) colors[i * 6 + j] = 1;
        }
        return [positions, colors];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta / 20;
        }
    });

    const color = useMemo(() => {
        switch (mode) {
            case 0: return new THREE.Color("#f5f5dc"); // Warm beige
            case 1: return new THREE.Color("#faf0e6"); // Linen white
            case 2: return new THREE.Color("#ffd700"); // Gold
            default: return new THREE.Color("#ffffff");
        }
    }, [mode]);

    return (
        <lineSegments ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial vertexColors={false} color={color} transparent opacity={0.2} blending={THREE.AdditiveBlending} />
        </lineSegments>
    )
}

export default function AIBackground({ mode }: { mode: number }) {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <color attach="background" args={['#000000']} />
                <ambientLight intensity={0.5} />
                <ParticleField mode={mode} />
                <Connections mode={mode} />
            </Canvas>
        </div>
    );
}
