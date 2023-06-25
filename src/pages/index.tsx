import { Layout, Container } from '@components/common';
import { Button, Logo, Text, Input, SectionHeader } from '@components/ui';
import useHelloWorld from '@lib/hooks/useHelloWorld';

const SayHelloWorldSection = () => {
  const { sayHello, loading, helloModel, setName } = useHelloWorld();

  return (
    <div className="flex flex-col">
      <SectionHeader
        sectionTitle="Hello World API"
        sectionSubtext="View and test out an example using NextJS API server with networking through apisauce."
      />

      <div className="self-center pt-8 flex flex-col gap-8 items-center">
        <Input title="Enter name" placeholder="John" onChange={(value) => setName(value)} />

        <Button className="justify-center" variant="ghost" onClick={sayHello} disabled={loading}>
          <Text>Say Hello</Text>
        </Button>

        <Text className="text-green">
          <span>{helloModel.helloWorldMessage}</span>
          <span className="text-base"> x{helloModel.totalRequests}</span>
        </Text>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Container className="flex flex-col gap-32">
      <div className="relative h-96">
        <Logo />
      </div>

      <SectionHeader
        sectionTitle="Next JS Starter Project"
        sectionSubtext="This is a starter project with all the basic dependencies and project structure to quickly
          get started on a new NextJS 12 project."
      />

      <SayHelloWorldSection />
    </Container>
  );
};

Home.Layout = Layout;

export default Home;
