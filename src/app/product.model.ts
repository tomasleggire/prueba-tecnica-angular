export interface Product {
  name: string;
  state: string;
  stock: boolean;
  price: number;
  imgUrl: string;
}

export interface ProductStates {
  enabled: string;
  disabled: string;
  visible: string;
};

