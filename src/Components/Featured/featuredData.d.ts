declare type HomeInfoObjectDataTypes = {
    readonly room: number;
    readonly bath: number;
    readonly size: string;
    readonly unit: string;
};
declare type HomeLinkObjectDataTypes = {
    readonly linkTitle: string;
    readonly link: string;
};
declare type HomeObjectDataTypes = {
    readonly address: string;
    readonly price: string;
    readonly homeInfo: HomeInfoObjectDataTypes;
    readonly homeLink: HomeLinkObjectDataTypes;
};
interface DataStructure {
    readonly location: string;
    readonly title: string;
    readonly sale: string;
    readonly featuredHomes: {
        1: HomeObjectDataTypes;
        2: HomeObjectDataTypes;
        3: HomeObjectDataTypes;
    };
}
declare const Data: DataStructure;
export default Data;
