interface Object {
  readonly stars: string,
  readonly testimonial: string,
  readonly name : string
}

interface DataStructure {
  readonly subTitle: string,
  readonly title: string,
  readonly testimonials: Object[]
}

const Data: DataStructure = {
  subTitle: "CLIENT",
  title: "TESTIMONIALS",
  testimonials: [
    {
      "stars": "☆☆☆☆☆",
      "testimonial": "The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro.",
      "name": "Lorem Ipman"
    },
    {
      "stars": "☆☆☆☆☆",
      "testimonial": "The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro.",
      "name": "Lorem Ipman"
    },
    {
      "stars": "☆☆☆☆☆",
      "testimonial": "The medulla voodoo sacerdos locus coeruleus flesh eater, lateral geniculate nucleus suscitat mortuos braaaains comedere carnem superior colliculus virus. Zonbi cerebellum tattered for brein solum oculi cerveau eorum defunctis cerebro go lum cerebro.",
      "name": "Lorem Ipman"
    }
  ]
  

}
export default Data