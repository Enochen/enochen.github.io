export interface ImagesGraph {
  allFile: AllFile
}
export interface AllFile {
  edges?: EdgesEntity[] | null
}
export interface EdgesEntity {
  node: Node
}
export interface Node {
  relativePath: string
  childImageSharp: ChildImageSharp
}
export interface ChildImageSharp {
  fluid: Fluid
}
export interface Fluid {
  base64: string
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}