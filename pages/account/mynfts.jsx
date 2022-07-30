import React from 'react'
import AccountLayout from '../../components/AccountLayout'

const MyNFTs = () => {
  const [loading,setLoading] = useState(false);
  
  return (
    <AccountLayout>
      <div className='text-2xl font-semibold p-5'>Warranty NFTs</div>
    </AccountLayout>
  )
}

export default MyNFTs