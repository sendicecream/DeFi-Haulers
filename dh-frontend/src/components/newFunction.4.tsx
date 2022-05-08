import { TransactionStatus } from '@usedapp/core';

export function newFunction(state: TransactionStatus) {
  return state.status == "PendingSignature";
}
