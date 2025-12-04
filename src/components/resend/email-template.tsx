import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ 
  name,
  email,
  message
}: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <div style={{ borderBottom: '3px solid #ffd700', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#333', margin: '0' }}>NextGenAI Club - New Contact</h1>
        <p style={{ color: '#666', margin: '5px 0 0 0', fontSize: '14px' }}>Vishwakarma University</p>
      </div>
      
      <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ color: '#333', margin: '0 0 10px 0', fontSize: '18px' }}>Contact Details</h2>
        <p style={{ margin: '5px 0' }}><strong>Name:</strong> {name}</p>
        <p style={{ margin: '5px 0' }}><strong>Email:</strong> {email}</p>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333', margin: '0 0 10px 0', fontSize: '18px' }}>Message</h2>
        <div style={{ 
          whiteSpace: 'pre-wrap', 
          backgroundColor: '#fff', 
          padding: '15px', 
          borderRadius: '8px',
          border: '1px solid #ddd',
          lineHeight: '1.5'
        }}>
          {message}
        </div>
      </div>
      
      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />
      
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>
          This email was sent via the NextGenAI Club contact form
        </p>
        <p style={{ fontSize: '12px', color: '#666', margin: '5px 0 0 0' }}>
          You can reply directly to this email to respond to {name}
        </p>
      </div>
    </div>
  );
}