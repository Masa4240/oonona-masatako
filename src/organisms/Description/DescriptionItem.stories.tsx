import React from 'react';
import { DescriptionItem } from './DescriptionItem';

export default { title: 'DescriptionItem' };

export const descriptionItem = () => (
  <DescriptionItem
    label="Masatako @ Oonona"
    title="Masatako @ Oonona"
    link={{ label: 'メニューを見る', url: 'https://example.com' }}
  >
    {
      ''
    }
  </DescriptionItem>
);
