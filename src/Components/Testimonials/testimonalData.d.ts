interface Object {
    readonly stars: string;
    readonly testimonial: string;
    readonly name: string;
}
interface DataStructure {
    readonly subTitle: string;
    readonly title: string;
    readonly testimonials: Object[];
}
declare const Data: DataStructure;
export default Data;
