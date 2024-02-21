import type { IComponentTheme } from '@visactor/vchart';

export const legendTheme: IComponentTheme = {
  discreteLegend: {
    visible: true,
    position: 'middle',
    padding: [16, 24],
    title: {
      visible: false
    },
    item: {
      visible: true,
      spaceCol: 16,
      spaceRow: 16,
      padding: 2,
      background: {
        state: {
          selectedHover: {
            fill: { type: 'palette', key: 'hoverBackgroundColor' }
          },
          unSelectedHover: {
            fill: { type: 'palette', key: 'hoverBackgroundColor' }
          }
        }
      },
      shape: {
        space: 8,
        style: {
          symbolType: 'circle',
          size: 12
        },
        state: { unSelected: { fillOpacity: 0.2, opacity: 1 } }
      },
      label: {
        space: 6,
        style: {
          fill: {
            type: 'palette',
            key: 'secondaryFontColor',
            default: '#89909d'
          },
          fontSize: 14,
          lineHeight: '130%',
          opacity: 1
        },
        state: {
          unSelected: {
            fill: { type: 'palette', key: 'disableFontColor' },
            opacity: 1
          }
        }
      }
    },
    allowAllCanceled: false
  }
};
