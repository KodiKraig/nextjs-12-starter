import { Text } from '@components/ui';
import { FC } from 'react';

const SectionHeader: FC<{ sectionTitle?: string; sectionSubtext?: string }> = ({
  sectionTitle,
  sectionSubtext
}) => {
  return (
    <div>
      <Text variant="sectionHeading">{sectionTitle}</Text>
      <Text>{sectionSubtext}</Text>
    </div>
  );
};

export default SectionHeader;
