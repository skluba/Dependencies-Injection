import IoCContainer from 'ioc-lite';

import { ContainerResources } from 'src/types';
import { HTTP } from '../services/http';
import { Logger } from '../services/logger';
import { Users } from '../services/users';

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<ContainerResources>();
  
  ioc.registerClass('http', HTTP);
  ioc.registerClass('logger', Logger);
  ioc.registerClass('users', Users);

  return ioc;
};
