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
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}> {/* Basic inline styles for email clients */}
      <h1 style={{ color: '#333' }}>New Contact Form Submission</h1>
      <p><strong>From:</strong> {name} ({email})</p>
      <p><strong>Message:</strong></p>
      <p style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px' }}>
        {message}
      </p>
      <hr />
      <p style={{ fontSize: '12px', color: '#666' }}>This email was sent via your contact form.</p>
    </div>
  );
}