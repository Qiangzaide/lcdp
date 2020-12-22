import React, { useState, useCallback, FC } from 'react';
import { Layout } from 'antd';
import FormPanel from './components/ComponentPanel';
import ComponentStore from './components/Fields';
import FormContent from './components/Content';
import ItemConfig from './components/Config';
import { FormStateContext } from './models/index';
import { IFormItemConfig } from './type';
import './index.less';

const FormProvider: FC = ({ children }) => {
  const [config, setConfig] = useState<IFormItemConfig[]>([
    {
      id: '2',
      name: '文本框',
      type: 'InputField',
      options: {
        field: 'WB',
        label: '文本',
        required: false,
        placeholder: '填写数字',
      },
    },
    {
      id: '1',
      name: '数字',
      type: 'InputField',
      options: {
        field: 'SZ',
        label: '数字',
        required: false,
        placeholder: '填写数字',
      },
    },
  ]);
  const [selectKey, setSelectKey] = useState<string>('');

  const handleOnChange = useCallback((params: IFormItemConfig[]) => {
    setConfig(params);
  }, []);

  return (
    <FormStateContext.Provider
      value={{
        config,
        onChange: handleOnChange,
      }}
    >
      {children}
    </FormStateContext.Provider>
  );
};

const FormEditor = () => {
  return (
    <Layout className="wrapper">
      <FormProvider>
        <Layout.Sider theme="light" width={320} className="sider">
          <FormPanel componentList={ComponentStore.getComponentList()} />
        </Layout.Sider>
        <Layout.Content className="content">
          <FormContent />
        </Layout.Content>
        <Layout.Sider theme="light" width={400} className="sider">
          <ItemConfig />
        </Layout.Sider>
      </FormProvider>
    </Layout>
  );
};

export default FormEditor;
