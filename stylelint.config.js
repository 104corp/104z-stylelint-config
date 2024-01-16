// Property Order Rules Arranged from stylelint-config-recess-order
// GitHub: https://github.com/stormwarning/stylelint-config-recess-order
export default {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'font-family-no-duplicate-names': true, // 重複 font family
    'function-calc-no-unspaced-operator': true, // calc 空白間距
    'string-no-newline': true, // 字串換行
    'unit-no-unknown': true, // 未知單位
    'property-no-unknown': true, // 未知屬性
    'keyframe-declaration-no-important': true, // keyframes important
    'declaration-block-no-duplicate-properties': true, // 重複屬性
    'block-no-empty': null, // 無內容
    'selector-pseudo-class-no-unknown': true, // 未知偽類
    'selector-pseudo-element-no-unknown': true, // 未知偽元素
    'selector-type-no-unknown': true, // 未知 tag
    "at-rule-no-unknown": null,
    'scss/at-rule-no-unknown': [
      true,
      {
        // 不明規則
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer'
        ]
      }
    ],
    'no-descending-specificity': null, // 層級問題
    'no-duplicate-at-import-rules': true, // 重複 @import
    'no-duplicate-selectors': true, // 多個重複選取器
    'color-named': 'never', // 顏色名字
    'keyframes-name-pattern': 'animate-.+', // keyframe 命名規定
    'declaration-block-single-line-max-declarations': 1, // 每個屬性換行
    'selector-max-compound-selectors': 5, // 選取器組合數量
    'selector-pseudo-element-colon-notation': 'double', // 偽元素冒號表示法
    'max-nesting-depth': 5, // 嵌入深度
    'function-name-case': 'lower', // fn 小寫
    'function-url-quotes': 'always', // url 要有引號
    'value-keyword-case': 'lower', // 值小寫
    'custom-property-empty-line-before': 'never', // 自訂屬性前不能空格
    'declaration-empty-line-before': 'never', // 每個屬性前, 空行
    'selector-attribute-quotes': 'always', // 屬性選擇器, 值需要引號
    'rule-empty-line-before': [
      'always-multi-line',
      {
        // 每個選取器之前, 空格
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'order/properties-order': [
      {
        // Must be first.
        properties: ['all', 'content', 'appearance']
      },
      {
        // Position.
        properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index']
      },
      {
        // Display mode.
        properties: ['box-sizing', 'display']
      },
      {
        // Flexible boxes.
        properties: [
          'flex',
          'flex-basis',
          'flex-direction',
          'flex-flow',
          'flex-grow',
          'flex-shrink',
          'flex-wrap'
        ]
      },
      {
        // Grid layout.
        properties: [
          'grid',
          'grid-area',
          'grid-template',
          'grid-template-areas',
          'grid-template-rows',
          'grid-template-columns',
          'grid-row',
          'grid-row-start',
          'grid-row-end',
          'grid-column',
          'grid-column-start',
          'grid-column-end',
          'grid-auto-rows',
          'grid-auto-columns',
          'grid-auto-flow',
          'grid-gap',
          'grid-row-gap',
          'grid-column-gap'
        ]
      },
      {
        // Gap.
        properties: ['gap', 'row-gap', 'column-gap']
      },
      {
        // Layout alignment.
        properties: [
          'place-items',
          'align-content',
          'align-items',
          'align-self',
          'justify-content',
          'justify-items',
          'justify-self'
        ]
      },
      {
        // Order.
        properties: ['order']
      },
      {
        // Box model.
        properties: [
          'float',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'overflow',
          'overflow-x',
          'overflow-y',
          '-webkit-overflow-scrolling',
          '-ms-overflow-x',
          '-ms-overflow-y',
          '-ms-overflow-style',
          'overscroll-behavior',
          'overscroll-behavior-x',
          'overscroll-behavior-y',
          'overscroll-behavior-inline',
          'overscroll-behavior-block',
          'clip',
          'clip-path',
          'clear'
        ]
      },
      {
        // Typography.
        properties: [
          'font',
          'font-family',
          'font-size',
          'font-style',
          'font-weight',
          'font-feature-settings',
          'font-kerning',
          'font-variant',
          'font-variant-ligatures',
          'font-variant-caps',
          'font-variant-alternates',
          'font-variant-numeric',
          'font-variant-east-asian',
          'font-variant-position',
          'font-size-adjust',
          'font-stretch',
          'font-effect',
          'font-emphasize',
          'font-emphasize-position',
          'font-emphasize-style',
          '-webkit-font-smoothing',
          '-moz-osx-font-smoothing',
          'font-smooth',
          'hyphens',
          'line-height',
          'color',
          'text-align',
          'text-align-last',
          'text-emphasis',
          'text-emphasis-color',
          'text-emphasis-style',
          'text-emphasis-position',
          'text-decoration',
          'text-decoration-line',
          'text-decoration-thickness',
          'text-decoration-style',
          'text-decoration-color',
          'text-underline-position',
          'text-underline-offset',
          'text-indent',
          'text-justify',
          'text-outline',
          '-ms-text-overflow',
          'text-overflow',
          'text-overflow-ellipsis',
          'text-overflow-mode',
          'text-shadow',
          'text-transform',
          'text-wrap',
          '-webkit-text-size-adjust',
          '-ms-text-size-adjust',
          'letter-spacing',
          'word-break',
          'word-spacing',
          'word-wrap', // Legacy name for `overflow-wrap`
          'overflow-wrap',
          'tab-size',
          'white-space',
          'vertical-align',
          'list-style',
          'list-style-position',
          'list-style-type',
          'list-style-image'
        ]
      },
      {
        // Accessibility & Interactions.
        properties: [
          'pointer-events',
          '-ms-touch-action',
          'touch-action',
          'cursor',
          'visibility',
          'zoom',
          'table-layout',
          'empty-cells',
          'caption-side',
          'border-spacing',
          'border-collapse',
          'quotes',
          'counter-reset',
          'counter-increment',
          'resize',
          'user-select',
          'nav-index',
          'nav-up',
          'nav-right',
          'nav-down',
          'nav-left'
        ]
      },
      {
        // Background & Borders.
        properties: [
          'background',
          'background-color',
          'background-image',
          "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
          'filter:progid:DXImageTransform.Microsoft.gradient',
          'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader',
          'filter',
          'background-repeat',
          'background-attachment',
          'background-position',
          'background-position-x',
          'background-position-y',
          'background-clip',
          'background-origin',
          'background-size',
          'background-blend-mode',
          'isolation',
          'border',
          'border-color',
          'border-style',
          'border-width',
          'border-top',
          'border-top-color',
          'border-top-style',
          'border-top-width',
          'border-right',
          'border-right-color',
          'border-right-style',
          'border-right-width',
          'border-bottom',
          'border-bottom-color',
          'border-bottom-style',
          'border-bottom-width',
          'border-left',
          'border-left-color',
          'border-left-style',
          'border-left-width',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'outline',
          'outline-width',
          'outline-style',
          'outline-color',
          'outline-offset',
          'box-shadow',
          'mix-blend-mode',
          'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
          "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
          'opacity',
          '-ms-interpolation-mode'
        ]
      },
      {
        // SVG Presentation Attributes.
        properties: [
          'alignment-baseline',
          'baseline-shift',
          'dominant-baseline',
          'text-anchor',
          'word-spacing',
          'writing-mode',

          'fill',
          'fill-opacity',
          'fill-rule',
          'stroke',
          'stroke-dasharray',
          'stroke-dashoffset',
          'stroke-linecap',
          'stroke-linejoin',
          'stroke-miterlimit',
          'stroke-opacity',
          'stroke-width',

          'color-interpolation',
          'color-interpolation-filters',
          'color-profile',
          'color-rendering',
          'flood-color',
          'flood-opacity',
          'image-rendering',
          'lighting-color',
          'marker-start',
          'marker-mid',
          'marker-end',
          'mask',
          'shape-rendering',
          'stop-color',
          'stop-opacity'
        ]
      },
      {
        // Transitions & Animation.
        properties: [
          'transition',
          'transition-delay',
          'transition-timing-function',
          'transition-duration',
          'transition-property',
          'transform',
          'transform-origin',
          'animation',
          'animation-name',
          'animation-duration',
          'animation-play-state',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction'
        ]
      }
    ]
  },
  ignoreFiles: ['.vscode/**', 'dist/**', 'node_modules/**']
}
