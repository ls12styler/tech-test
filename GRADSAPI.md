# API Specification

## Customer Data Model

#### constructor(Data)

* @params
    * Data - Object - The data used to create the CustomerDataModel
* @return void

#### getFirstName()

* @return String

#### setFirstName(Name)

* @params
    * Name - String - The customers first name
* @return void
* @throws Error

#### getLastName()

@return String

#### setLastName(Name)

* @params
    * Name - String - The customers last name
* @return void
* @throws Error

#### getAge()

* @return Int

#### setAge(Age)

* @params
    * Age - Int - The customers age
* @return void
* @throws Error

#### getAddress()

* @return String

#### setAddress(Address)

* @params
    * Address - AddressDataModel - The customers first name
* @return void
* @throws Error

## Address Data Model

#### constructor(Data)

* @params
    * Data - Object - The data used to create the CustomerDataModel
* @return void

#### getHouseNumber()

* @return String

#### setHouseNumber(Number)

* @params
    * Number - String - The customers house number/name
* @return void
* @throws Error

#### getStreet()

* @return String

#### setStreet(Street)

* @params
    * Street - String - The street name of the customers address
* @return void
* @throws Error

#### getTown()

* @return String

#### setTown(Town)

* @params
    * Town - String - The town the customer lives in
* @return void
* @throws Error

#### getPostCode()

* @return String

#### setPostCode(PostCode)

* @params
    * PostCode - String - The customers PostCode
* @return void
* @throws Error

## Customer Data Mapper

#### fetch(id)

* @params
    *  ID - Integer - The ID of the customer data to fetch
* @return CustomerDataModel
* @throws Error

#### save(CustomerDataModel)

* @params 
    * CustomerDataModel - The representation of the customer to save to the store
* @return CustomerDataModel
* @throws Error

#### delete(CustomerDataModel)

* @params
    * CustomerDataModel - The representation of the Customer that we should delete
* @return void
* @throws Error
