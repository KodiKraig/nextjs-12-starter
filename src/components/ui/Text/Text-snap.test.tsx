import * as React from 'react';
import { Text } from '@components/ui';
import renderer from 'react-test-renderer';

describe('Text renders different variants', () => {
  it('Body', () => {
    const component = renderer.create(
      <Text style={{ alignItems: 'center' }}> Hello World </Text>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Heading', () => {
    const component = renderer.create(
      <Text variant="heading"> Hello World </Text>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Section Heading', () => {
    const component = renderer.create(
      <Text variant="sectionHeading"> Hello World </Text>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Page Heading', () => {
    const component = renderer.create(
      <Text variant="pageHeading"> Hello World </Text>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
