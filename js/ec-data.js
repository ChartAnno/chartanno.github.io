/* Case data for the Case Studies section; edit this file directly. */
const EC_CASES = [
  {
    "key": "chart_fidelity",
    "name": "Chart Fidelity",
    "group": "Rule-based",
    "sample": "Area_33",
    "setting": "Input: code",
    "level": "Intent",
    "metric": "whether annotation generation preserves the original chart, including aspect ratio, axes layout, and data-carrying marks with their encoded values (binary).",
    "case": "the high-score output preserves the base chart structure, whereas the low-score one changes the plotting area and axes layout.",
    "high": {
      "model": "Gemini 3.1 Pro Preview",
      "score": "1.000"
    },
    "low": {
      "model": "Qwen3.5-122B-A10B",
      "score": "0.000"
    },
    "instruction": "Summarize the dWAR distribution by adding below the title stating 'Red Sox left fielder Hanley Ramirez has a defensive WAR of -1.4, the worst in the majors. The distribution of defensive value among 357 MLB players:'. Present x=0 labeled 'MLB AVG.' and distinguish the x<0 and x>0 sides of the distribution. Identify the highlighted points with the callouts 'Hanley Ramirez has cost the Red Sox 1.4 wins because of his poor fielding.', 'Seven players have a dWAR of -0.9, the closest to Ramirez.', and 'Four players lead the league with a dWAR of +1.4'. Summarize the two sides of the chart with the labels 'NEGATIVE DEFENSIVE WAR' and 'POSITIVE DEFENSIVE WAR'. Finally, summarize the source information with 'SOURCE: Baseball-reference.com' and 'GLOBE STAFF'."
  },
  {
    "key": "annotation_matching",
    "name": "Annotation Matching",
    "group": "Rule-based",
    "sample": "Line_132",
    "setting": "Input: code+Image",
    "level": "Implementation",
    "metric": "the correspondence between generated and ground-truth annotations across seven annotation categories (Jaccard-style).",
    "case": "the high-score output labels the data points with the intended y-values, whereas the low-score one incorrectly labels them with the x-axis year values.",
    "high": {
      "model": "Claude Sonnet 4.6",
      "score": "1.000"
    },
    "low": {
      "model": "Qwen3.5-9B",
      "score": "0.049"
    },
    "instruction": "Iterate through the 'years' array and label each point with its value. For the black series, use a 2.5 y-offset for all years except 2012 and 2013, where an offset of -4.5 is used. For the teal series, use 2.5 for most years, but -3.5 for 2009-2011 and 2014-2017. For the pink series, use a constant 2.5 y-offset. Labels should be bold, size 10, and match line colors. Use ax.text with transform=ax.transAxes to place the title \"Now about global warming. There is a controversy over what the countries of the world,\nincluding Australia, should do about the problem of global warming. Please indicate which\nof the following three statements comes closest to your own point of view.\" at (0.04, 1.05). Add the methodology note \"Dotted line indicates change in mode. See Methodology.\" at (0.04, -0.47) with color '#888888' and size 9."
  },
  {
    "key": "color_matching",
    "name": "Color Matching",
    "group": "Rule-based",
    "sample": "Bar_112",
    "setting": "Input: code",
    "level": "Implementation",
    "metric": "how closely annotation colors match the ground-truth palette, using perceptual (CIEDE2000) color distance.",
    "case": "the high-score output matches the reference, highlighting only the four target bars in orange while keeping the rest teal, whereas the low-score one recolors almost every bar orange, so the targets can no longer be told apart.",
    "high": {
      "model": "Claude Sonnet 4.6",
      "score": "1.000"
    },
    "low": {
      "model": "Gemini 3 Flash Preview",
      "score": "0.356"
    },
    "instruction": "Set the bar color to '#F28E2B' for the four highlighted local authority areas Chiltern, Wycombe, South Bucks, and Aylesbury Vale, while leaving the remaining bars in the default teal series color. Use `ax.axvline` at x=100 with `color='#F28E2B'`, `linewidth=1.5`, and `linestyle='-'`. Add the text 'UK = 100' at x=101, y=0.01 relative to the x-axis transform using `fontsize=9` and `color='#555555'`. Use `ax.text` at (100, 14) to display the multiline string 'Labour productivity\nvaries considerably\nacross the Ox-Cam Arc,\nfrom 27% higher than the\nnational average in\nChiltern, to 33% below\nthe national average in\nEast Northhamptonshire' with `fontsize=10`, `color='#666666'`, and a bbox dict: `{'boxstyle': 'square,pad=1.5', 'fc': '#FFFAF0', 'ec': 'none', 'alpha': 0.7}`."
  },
  {
    "key": "semantic_faithfulness",
    "name": "Semantic Faithfulness",
    "group": "LLM-judged",
    "sample": "Bar_58",
    "setting": "Input: code+Image",
    "level": "Operation",
    "metric": "whether annotations truthfully realize the meaning specified by the instruction, covering intended targets, values, and relations.",
    "case": "the high-score output separates the outer summer region from the central winter one, whereas the low-score one draws both boundaries but reverses the two seasonal labels.",
    "high": {
      "model": "Gemini 3 Flash Preview",
      "score": "4 / 5"
    },
    "low": {
      "model": "Claude Sonnet 4.6",
      "score": "1 / 5"
    },
    "instruction": "Begin by drawing two vertical dashed lines at the specified x-coordinates to partition the chart. Next, place the light orange text 'Summer Months' on the left side and draw two matching arrows pointing inward from the chart edges to the vertical lines. Finally, place the olive green text 'Winter Months' in the center and draw a double-headed arrow spanning the distance between the two vertical lines."
  },
  {
    "key": "semantic_clarity",
    "name": "Semantic Clarity",
    "group": "LLM-judged",
    "sample": "Line_32",
    "setting": "Input: code+Image",
    "level": "Implementation",
    "metric": "whether each annotation relates unambiguously to its visual target.",
    "case": "the high-score output anchors its marker on the curve with a connecting arrow, whereas the low-score one keeps the correct text but leaves the red marker floating above the curve, so the link between the event and the data point is unclear.",
    "high": {
      "model": "Gemini 3 Flash Preview",
      "score": "5 / 5"
    },
    "low": {
      "model": "GPT-5.4",
      "score": "2 / 5"
    },
    "instruction": "Render a red circle ('o') at the coordinates for '2016-06-23' by setting the plot color to '#e54e42' and markersize to 8. Add the text \"Brexit referendum\" at the date '2016-06-10' and y-value 2210 using color '#e54e42', size 14, and bold weight, with an arrow ('->') of color '#e54e42' and width 2 connecting it to the red circle. At the bottom (transform=ax.transAxes), render \"SOURCE: Yahoo Finance\" at (0, -0.12) in '#666666' size 8, \"BUSINESS INSIDER\" at (1, -0.12) in '#004c6d' size 8 bold, and \"Andy Kiersz/Business Insider\" at (0, -0.16) in '#999999' size 9."
  },
  {
    "key": "visual_clarity",
    "name": "Visual Clarity",
    "group": "LLM-judged",
    "sample": "Line_28",
    "setting": "Input: code",
    "level": "Implementation",
    "metric": "how cleanly the annotation layer reads, backed by rule-based text-overlap statistics.",
    "case": "the high-score output spreads its ten event callouts around the line, whereas the low-score one stacks them in a small region, leaving the annotation text difficult to read.",
    "high": {
      "model": "Gemini 3 Flash Preview",
      "score": "5 / 5"
    },
    "low": {
      "model": "Claude Sonnet 4.6",
      "score": "1 / 5"
    },
    "instruction": "Implement the annotations by drawing vertical lines using color '#555555' and width 0.8. Place text titles in bold color '#1f497d' fontsize 10.5, and body text in color '#4e79a7' fontsize 9.\n1. At '2014-02-25', draw line up (height 15), center text. text block: '25 Feb 2014\nStock continued to soar on\nyear-over-year quarterly\nrevenue growth of 95%'.\n2. At '2014-05-15', draw line down (height 15), right-align text. text block: 'May 2014\nWall Street pessimistic\nahead of the Q1 earnings call'.\n3. At '2015-07-22', draw line up (height 15), center text. text block: '22 Jul 2015\nStock reaches all-time\nhigh of $128.74'.\n4. At '2015-08-06', draw line down (height 15), center text. text block: '6 Aug 2015\nLost nearly $19M in Q2;\nstock plummets 23%'.\n5. At '2015-11-06', draw line up (height 10), left-align text. text block: '6 Nov 2015\nShares jump nearly 20% as\nearnings easily beat estimates'.\n6. At '2016-02-08', draw line down (height 10), right-align text. text block: '8 Feb 2016\n1Q guidance came in well\nbelow targets; shares\nplunge over 50%'.\n7. At '2016-06-27', draw line down (height 20), center text. text block: '27 Jun 2016\nStock drops 9.2%\namid Brexit fears'.\n8. At '2016-08-15', draw line up (height 20), center text. text block: 'Aug 2016\nSubscription model begins\npaying off. Shares rose 12.5%,\ndriven by impressive 2Q results'.\n9. At '2017-11-03', draw line down (height 15), center text. text block: '3 Nov 2017\nReported revenue of\n$214.9M, missing the\nconsensus estimate of\n$219M'.\n10. At '2018-07-23', draw line up (height 15), right-align text. text block: '23 Jul 2018\nZen Master Andy Kriebel's\n45th birthday\nStock takes a dive'.\n\nFor the final price, add text '101.45' at the last data index with color '#f28e2b', bold weight, and fontsize 10. Add the source text 'SOURCE: Yahoo! Finance •••• DESIGNED BY: Andy Kriebel | @VizWizBI' using relative axes coordinates (0.5, -0.1) with horizontal alignment 'center', fontsize 8, and color '#999999'."
  },
  {
    "key": "annotation_organization",
    "name": "Annotation Organization",
    "group": "LLM-judged",
    "sample": "Combination_22",
    "setting": "Input: code",
    "level": "Intent",
    "metric": "how well annotation elements are placed, grouped, and coordinated into a coherent composition.",
    "case": "the high-score output places the subtitle and the data-point callout in a clean composition, whereas the low-score one lets the subtitle drift down to compete with the legend and source area, and the explanatory callout overruns the chart.",
    "high": {
      "model": "Gemini 3 Flash Preview",
      "score": "4 / 5"
    },
    "low": {
      "model": "Qwen3.5-9B",
      "score": "2 / 5"
    },
    "instruction": "Summarize the chart's findings by adding the sub-header \"Public sector net debt excluding public sector banks, UK, March 1994 to the end of July 2020\". Additionally, identify the specific data point for July 2020 by adding a text \"PSND ex at end of July 2020 £2,004.0 billion, 103.5% of GDP\"."
  },
  {
    "key": "attention_guidance",
    "name": "Attention Guidance",
    "group": "LLM-judged",
    "sample": "Bar_152",
    "setting": "Input: code",
    "level": "Intent",
    "metric": "whether annotations make the intended target visually salient and establish a clear focus.",
    "case": "the high-score output emphasizes the peak snowfall hours, whereas the low-score one leaves the peak bars unemphasized and its labels far from the key region, so the intended focus is lost.",
    "high": {
      "model": "Claude Sonnet 4.6",
      "score": "4 / 5"
    },
    "low": {
      "model": "Gemini 3 Flash Preview",
      "score": "2 / 5"
    },
    "instruction": "Summarize the snowfall intensity and peak period at y=2.0, 5.0, and 8.0 labeled “Light,” “Moderate,” and “Heavy,” respectively, and labeling the period from 6 p.m. to 11 p.m. as “Heaviest Rates.” Summarize the temporal and weather context by adding the labels “Today,” “Tonight,” and “Sunday” below the x-axis, noting “Snow becoming off and on,” and adding the caution “Mix possible in some areas through 7 p.m.” Finally, summarize the forecast details with the subtitle “1\"+ per hour rates likely at times this evening,” and add the footer info “National Weather Service - Chicago,” “weather.gov/chicago,” and “Saturday, January 30, 2021 4:49 AM CST.”"
  }
];
