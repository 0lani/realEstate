type HomeInfoObjectDataTypes = {
  readonly room: number,
  readonly bath: number,
  readonly size: string,
  readonly unit: string,
}

type HomeLinkObjectDataTypes = {
  readonly linkTitle: string,
  readonly link: string
}

type HomeObjectDataTypes = {
  readonly address: string,
  readonly price: string,
  readonly homeInfo: HomeInfoObjectDataTypes,
  readonly homeLink: HomeLinkObjectDataTypes
}

interface DataStructure {
  readonly location: string,
  readonly title: string,
  readonly sale: string,
  readonly featuredHomes: {1:HomeObjectDataTypes, 2:HomeObjectDataTypes, 3:HomeObjectDataTypes},
}

const Data: DataStructure = {
  "location": "LAS VEGAS, HENDERSON, SUMMERLIN + MORE",
  "title": "FEATURED",
  "sale": "HOMES FOR SALE",
  "featuredHomes": {
    1:{
      address: "123 MAIN ST, LAS VEGAS, NV 89147", 
      price: "$800,150", 
      homeInfo: {room: 4, bath: 3, size: "2,507", unit: "SqFt"}, 
      homeLink: {linkTitle:"Schedule a Showing", link:"#"}
    },
    2:{
      address: "123 MAIN ST, LAS VEGAS, NV 89147", 
      price: "$700,150", 
      homeInfo: {room: 4, bath: 3, size: "2,507", unit: "SqFt"}, 
      homeLink: {linkTitle:"Schedule a Showing", link:"#"}
    },
    3:{
      address: "123 MAIN ST, LAS VEGAS, NV 89147", 
      price: "$500,150", 
      homeInfo: {room: 4, bath: 3, size: "2,507", unit: "SqFt"}, 
      homeLink: {linkTitle:"Schedule a Showing", link:"#"}
    }
  }
}

export default Data