//SPDX-License-Identifier: MIT

pragma solidity^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
error WarrantyNFT__alreadyExists();
error WarrantyNFT__orderNotFound();
error WarrantyNFT__AlreadyIssuedNFT();



contract WarrantyNFT is ERC721URIStorage { 
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    struct NftTokenData {
        uint256 tokenId;
        string expiryDate;
        string tokenURI;
        string expireTokenURI;
    }

    event NFTMinted(uint256 tokenId,address owner);

    //every seller is has a unique minter;
    address private immutable i_sellerId;
    constructor(address sellerId,string memory NFTName, string memory NFTSymbol) ERC721(NFTName,NFTSymbol) {
            i_sellerId = sellerId;
    }

    function isExistsInArray(uint256[] memory array, uint256 key) internal pure returns(bool) {
        for(uint256 i=0; i<array.length; ++i) {
            if (array[i] == key){
                return true;
            }
        }
        return false;
    }

  
    //mapping of order to customer orders array;
    mapping (address=>uint256[]) private customerToOrders;

    //mapping for NFT Data;
    mapping(uint256=>NftTokenData) public NftTokenToData;


    //see if some order already has issed warranty NFT;
    mapping(uint256=>uint256) private issuedNFT;

    function placeOrder(uint256 orderId) public  {
        bool isOrderExists = isExistsInArray(customerToOrders[msg.sender], orderId);
        if (isOrderExists) {
            revert WarrantyNFT__alreadyExists();
        }
        customerToOrders[msg.sender].push(orderId);
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
            return NftTokenToData[tokenId].tokenURI;
    } 
    

    function mintWarrantyNFT(address customer, uint256 orderId, string memory tokenURI, string memory expireTokenURI, string memory expiryDate) public onlyCustomer  {
        bool isOrderExists = isExistsInArray(customerToOrders[customer], orderId);
        if (!isOrderExists) {
            revert WarrantyNFT__orderNotFound();
        }
        if (issuedNFT[orderId] != 0) {
            revert WarrantyNFT__AlreadyIssuedNFT();
        }
         _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(customer, newItemId);
        _setTokenURI(newItemId, tokenURI);
        NftTokenToData[newItemId] = NftTokenData({tokenId : newItemId,expiryDate : expiryDate, tokenURI : tokenURI, expireTokenURI : expireTokenURI});
        issuedNFT[orderId] = newItemId;
        emit NFTMinted(newItemId,customer);
    }
    



    modifier onlyCustomer() {
        require(customerToOrders[msg.sender].length>0, "Not Allowed, You are not customer");
        _;
    }




    
}