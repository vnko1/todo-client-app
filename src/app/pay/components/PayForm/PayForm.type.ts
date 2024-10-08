export type PayFormProps = {
  orderReference: string;
  orderDate: number;
  amount: number;
  currency: string;
  productName: string[];
  productPrice: number[];
  productCount: number[];
  clientFirstName?: string;
  clientLastName?: string;
  clientAddress?: string;
  clientCity?: string;
  clientEmail?: string;
  language?: string;
  defaultPaymentSystem?: string;
  clientPhone?: string;
  merchantTransactionSecureType?: string;
  returnUrl?: string;
  serviceUrl?: string;
};
