import React, { FC } from 'react';
import { Empty } from 'antd';

interface ConfigProps {
  [key: string]: any;
}

const Config: FC<ConfigProps> = props => {
  return <Empty />;
};

export default Config;
