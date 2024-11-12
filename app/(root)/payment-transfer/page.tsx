import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id
  })

  if(!accounts) return;

  const accountsData = accounts?.data;
  return (
    <section className='payment-transfer bg-white'>
      <HeaderBox
      title='Pagamentos e Transferencias'
      subtext='Preencha as informações para executar a ação'
      />
      <section className='size-full pt-5'>

        <PaymentTransferForm
        accounts={accountsData}
        />
      </section>

    </section>
  )
}

export default Transfer