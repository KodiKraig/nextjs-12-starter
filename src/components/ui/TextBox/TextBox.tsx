import { FC } from 'react';
import { Text } from '@components/ui';

interface TextBoxProps {
  children?: any;
}

const TextBox: FC<TextBoxProps> = ({ children }) => (
  <div className="flex justify-center">
    <Text variant="body">{children}</Text>
  </div>
);

export default TextBox;
