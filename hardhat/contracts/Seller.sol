//SPDX-License-Identifier: MIT

pragma solidity^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./WarrantyNFT.sol";

error Seller_SellerAlreadyExists();
error Seller_sellerDoesntExists();

library Library {
  struct data {
     WarrantyNFT WarrantyContract;
     bool isValue;
   }
}

contract Seller{
     using Library for Library.data;
  mapping(address => Library.data) sellers;
    

    function createSeller(string memory NFTName, string memory NFTSymbol) public {
        if (sellers[address(msg.sender)].isValue) {
            revert Seller_SellerAlreadyExists();
        }

            WarrantyNFT newContract =  new WarrantyNFT(address(msg.sender), NFTName,NFTSymbol);
            sellers[msg.sender].WarrantyContract = newContract;
            sellers[msg.sender].isValue = true;
    }

    function getSellerWarrantyContract() public returns (WarrantyNFT) {
        if (!sellers[address(msg.sender)].isValue) {
            revert Seller_sellerDoesntExists();
        }
        return sellers[msg.sender].WarrantyContract;
    }
}



