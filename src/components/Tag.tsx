import * as React from 'react';

interface TagProps {
  content: string;
  tagColor: string;
}

export const Tag: React.FC<TagProps> = function Tag({ content, tagColor, ... props }) {
  return (
    <div style={{
      padding: '0 8px',
      borderRadius: 4,
      backgroundColor: tagColor,
    }}>
      <p style={{ color: '#414559' }}>{content}</p>
    </div>
  );
}
