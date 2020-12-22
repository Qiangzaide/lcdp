import InputField from './InputField';
import { FieldComponent } from '../../type';

type ComponentMap = {
  [key: string]: FieldComponent;
};

// const list: ComponentMap = {
//   InputField,
// };

class ComponetStore {
  list: ComponentMap = {
    InputField,
  };

  getComponent(type: string) {
    return this.list[type];
  }

  setComponent() {
    this.list = { ...this.list, TextField: InputField };
  }

  getComponentList() {
    return [InputField];
  }
}

export default new ComponetStore();
