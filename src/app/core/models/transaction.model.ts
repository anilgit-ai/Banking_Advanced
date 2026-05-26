export interface Transaction {
  readonly id: string;

  readonly referenceNumber: string;

  readonly amount: number;

  readonly transactionType: string;

  readonly status: string;

  readonly createdAt: string;
}
