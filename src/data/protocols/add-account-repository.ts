import { AddAccountModel, AccountModel } from '../usecases/add-account/db-add.account-protocols'

import { } from '../../domain/usecases/add-account'
import { } from '../../domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
