import { contract } from './MintButton';

export function newFunction(account: string | null | undefined) {
  contract.connect(account);
}
