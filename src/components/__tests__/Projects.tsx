import { StaticQuery } from 'gatsby'
import React from 'react'
import renderer from 'react-test-renderer'
import { ImagesGraph } from '../../utils/types'
import { PureProjects } from '../Projects'
describe('Projects Section', () => {
  it('renders correctly', () => {
    const images: ImagesGraph = {
      allFile: {
        edges: [
          {
            node: {
              relativePath: 'askpalette.png',
              childImageSharp: {
                fluid: {
                  base64:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAAChElEQVQ4y5WUS2gTURSG41I3SheKuhELNhU1VqUPTFpqcFEjVVFERBAEcedaEZTUagWLC4WAiI9OFaFYxkWgKgYtauuiNiU+xlDTdKZN0qnYpk0mmVfye++kbaZpC9MD35zLvef881/uzLXl83nMQ2M+y7KMcDiMeDyOiYkJI+dyOZhjuV7bcgU0stksgsEgBgcHwXEcQqGQMVdaZ+6lYaODRCIBURQNB7quG5S6oWFep4wJAiIjI1A1reiQPuj2KLTBDJ0zO6Fj83omk4EkSQsvX7LlUvuBQAAsy8Lv94NhGMRisQWnK/UYDvOkYDkyUhqzySSE0VEIPA9NVUlnaZ2+8qGUBheJoLe/H+FoFB+/9GGabG+lKDqkTsYEZPnoEqZ+/4L4I4R/3E9MkjwbGYYsjC6qyUQjUKanig7VdArDTU4INXbwzt0QDu4y4Anjrj2I1TuMPE7yGFnn59YNXA5EHdsQ890rCOpaQVA45sZk/V6Ihw5AbNxvHXc1EtV2iA/vzwnqsGlE8K+nFum6cqRcdqScFdZpqMRM1VZM+dqLDuW0hBdnL4PxXEBn88VV8fz4JTx2n8PXp12Fz4k6TGU0HL6bxL5WFTW3FVTfsk5tm4Kd12U8eDtjCOo5cihpIui5k0SdV4Xrpgxni2KZhlYFVddk+N4sElRwpm0ATTeGcNQbXBXNLUNovDqAJz2RoqAqz+IPWw6BXQee3UBYbxnhdRmiXWsQ/+YtHEqOHIquELu9ZcAn2+r5TPhgg8pdgfGf5ImgQhy+667E+1dlhE2EjZYJdG9Gz8u1+D7QOndpEMFUVkJN53lsf3YCFR2nsKPjpGUqmdPY8ugI2vsYQ1AjF8V/RR3DxIr061cAAAAASUVORK5CYII=',
                  aspectRatio: 1.079847908745247,
                  src:
                    '/static/e6be3240ed2c270f52af63ccf3c552b2/35dab/askpalette.png',
                  srcSet:
                    '/static/e6be3240ed2c270f52af63ccf3c552b2/a6865/askpalette.png 200w,\n/static/e6be3240ed2c270f52af63ccf3c552b2/e52d5/askpalette.png 400w,\n/static/e6be3240ed2c270f52af63ccf3c552b2/35dab/askpalette.png 800w,\n/static/e6be3240ed2c270f52af63ccf3c552b2/7ef28/askpalette.png 1200w,\n/static/e6be3240ed2c270f52af63ccf3c552b2/088bd/askpalette.png 1420w',
                  sizes: '(max-width: 800px) 100vw, 800px',
                },
              },
            },
          },
          {
            node: {
              relativePath: 'hbhb.png',
              childImageSharp: {
                fluid: {
                  base64:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAAvElEQVQoz62Q2QqDQAxF0x8TXGr//xtEUEdnwF1Eb7mBFF+6PDRwyE0mE5KIiOBf3OjTNMUn4jhGFEXKu5okSXDPMjzyHIIvtu87iqJAWZb4xeQ4DkzThHmesSyLaouHYcA4jhrzjbkrzK/rqn7bNpznCWFhXdfoug5N06BtW4Wa+aqq4Jx75Qljw3uvNaxnU52Qk1hDen5iIbU14xth3hqHENT3fa8Ts5fekILYWlyD2mLTV+wMvDFXJbQnJ4q5wTMr9dsAAAAASUVORK5CYII=',
                  aspectRatio: 2.6949654491609083,
                  src:
                    '/static/8ca940abf88b8bf0aaae74ad7921f4a9/35dab/hbhb.png',
                  srcSet:
                    '/static/8ca940abf88b8bf0aaae74ad7921f4a9/a6865/hbhb.png 200w,\n/static/8ca940abf88b8bf0aaae74ad7921f4a9/e52d5/hbhb.png 400w,\n/static/8ca940abf88b8bf0aaae74ad7921f4a9/35dab/hbhb.png 800w,\n/static/8ca940abf88b8bf0aaae74ad7921f4a9/7ef28/hbhb.png 1200w,\n/static/8ca940abf88b8bf0aaae74ad7921f4a9/c9c17/hbhb.png 1600w,\n/static/8ca940abf88b8bf0aaae74ad7921f4a9/a1612/hbhb.png 2730w',
                  sizes: '(max-width: 800px) 100vw, 800px',
                },
              },
            },
          },
          {
            node: {
              relativePath: 'cue.jpg',
              childImageSharp: {
                fluid: {
                  base64:
                    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7ylE2gE5aVDAr//EAB4QAAIBAwUAAAAAAAAAAAAAAAECAwAQEgQREyAh/9oACAEBAAEFAjXtpY+RV04SzjIYbDp//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAHBAAAQQDAQAAAAAAAAAAAAAAAQACEBESICFR/9oACAEBAAY/ApxJpcc72KVA6//EABgQAAMBAQAAAAAAAAAAAAAAAAERIQAQ/9oACAEBAAE/IS0DghEA3NaIsOcCxgLTOHLn/9oADAMBAAIAAwAAABAjybz/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxAp/8QAFhEBAQEAAAAAAAAAAAAAAAAAEEER/9oACAECAQE/EIZT/8QAHRABAQACAgMBAAAAAAAAAAAAAREAECFBMVGBkf/aAAgBAQABPxBBALcaGj3y6hwinHjBYIdOZgePmiCoPYzBkdU96FMBe/3X/9k=',
                  aspectRatio: 0.75,
                  src: '/static/12f91ede981c5c0f871ac7b5b8969da8/c26dd/cue.jpg',
                  srcSet:
                    '/static/12f91ede981c5c0f871ac7b5b8969da8/471e9/cue.jpg 200w,\n/static/12f91ede981c5c0f871ac7b5b8969da8/dc2cb/cue.jpg 400w,\n/static/12f91ede981c5c0f871ac7b5b8969da8/c26dd/cue.jpg 800w,\n/static/12f91ede981c5c0f871ac7b5b8969da8/150ec/cue.jpg 1200w',
                  sizes: '(max-width: 800px) 100vw, 800px',
                },
              },
            },
          },
          {
            node: {
              relativePath: 'default.jpg',
              childImageSharp: {
                fluid: {
                  base64:
                    'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgMF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAX8Yob0hYR//xAAbEAACAwADAAAAAAAAAAAAAAAAAgMREgETIf/aAAgBAQABBQJmoilblrO037s//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAwEBAAAAAAAAAAAAAAAAABAxARH/2gAIAQEABj8COaoRf//EABsQAQEBAAIDAAAAAAAAAAAAABEBABAhMWGh/9oACAEBAAE/IQdNtSTDX5wpAnvSTfPRRN//2gAMAwEAAgADAAAAEKw//8QAFhEAAwAAAAAAAAAAAAAAAAAAEBEh/9oACAEDAQE/EFB//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHBABAAMAAwEBAAAAAAAAAAAAAQARITFBUXFh/9oACAEBAAE/EHRTJ2K5UuWpXVjX3ifcLq1M537kAY07v2MNO/s//9k=',
                  aspectRatio: 1.4982332155477032,
                  src:
                    '/static/1ef070b1ed84e0e52d2895ad9de033cf/c26dd/default.jpg',
                  srcSet:
                    '/static/1ef070b1ed84e0e52d2895ad9de033cf/471e9/default.jpg 200w,\n/static/1ef070b1ed84e0e52d2895ad9de033cf/dc2cb/default.jpg 400w,\n/static/1ef070b1ed84e0e52d2895ad9de033cf/c26dd/default.jpg 800w,\n/static/1ef070b1ed84e0e52d2895ad9de033cf/150ec/default.jpg 1200w,\n/static/1ef070b1ed84e0e52d2895ad9de033cf/86ab4/default.jpg 1600w,\n/static/1ef070b1ed84e0e52d2895ad9de033cf/b3045/default.jpg 2120w',
                  sizes: '(max-width: 800px) 100vw, 800px',
                },
              },
            },
          },
        ],
      },
    }
    const projectData = {
      data: [
        {
          name: 'Google',
          desc: 'I made google',
          tags: ['HTML/CSS'],
          live: 'https://google.org',
          github: 'https://github.com/google/google',
          image: 'google.jpg',
        },
        {
          name: 'cue',
          desc: 'right on cue!',
          tags: ['Python'],
          live: 'https://www.cornelldti.org/Projects/events',
          github: 'https://github.com/cornell-dti/events-backend/',
          image: 'cue.jpg',
        },
      ],
    }
    const tree = renderer
      .create(<PureProjects {...projectData} images={images} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
