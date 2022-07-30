import React, { useEffect, useState } from 'react'
import AccountLayout from '../../components/AccountLayout'
import {useMoralis} from 'react-moralis';
import {useWeb3Contract} from 'react-moralis'
import { verifyAuthentication } from '../../utils/verifyAuth';
import WarrantyABI from '../../constants/WarrantyNFTABI.json';
export const getServerSideProps = async(ctx) => {
  const auth = verifyAuthentication(ctx.req);
  if (auth.state) {
    try {
    return {props : {user : auth.decodedData.user}};
    }catch(err) {
      console.log(err);
      return {notFound : true};
    }
  }
  return {
    redirect : {
      destination : '/auth'
    }
  }
};

const MyNFTs = ({user}) => {
  const [loading,setLoading] = useState(false);
  const {account,chainId,isWeb3Enabled} = useMoralis();
  const [message,setMessage] = useState('');
  useEffect(()=>{
    if (isWeb3Enabled) {
      setMessage(`Showing NFTs for the account ${account}`);
    }
  }, [isWeb3Enabled])

  // const {runContractFunction : getCustomersTokens} = useWeb3Contract({
  //   abi : WarrantyABI,
  //   contractAddress : 
  // });
  return (
    <AccountLayout>
      <div className='p-5'>
      <div className='text-2xl font-semibold'>Warranty NFTs</div>
      <p className='text-gray-600 mt-1 text-sm'>{message}</p>
      </div>


    </AccountLayout>
  )
}

export default MyNFTs