import { useCallback, useState } from 'react';
import { api } from '@lib/api';

interface HelloWorldModel {
  responseError?: string;
  helloWorldMessage?: string;
  totalRequests: number;
}

const useHelloWorld = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState<HelloWorldModel>({ totalRequests: 0 });
  const [loading, setLoading] = useState(false);

  const sayHello = useCallback(async () => {
    setLoading(true);

    const { data, error } = await api.getHelloWorld(name);

    setLoading(false);

    if (error || data?.message === undefined) {
      setModel({
        responseError: error ?? 'No message returned',
        totalRequests: model.totalRequests + 1
      });
    } else {
      setModel({ helloWorldMessage: data?.message, totalRequests: model.totalRequests + 1 });
    }
  }, [name, model.totalRequests]);

  return {
    name,
    setName,
    helloModel: model,
    sayHello,
    loading
  };
};

export default useHelloWorld;
