# /research

Launches Phase 1: Market research and opportunity analysis.

## Arguments
- `$ARGUMENTS` (optional): Theme or category focus (e.g., "wellness", "productivity")

## Workflow

1. **Trend Research** (trend-researcher agent)
   - Search for underserved user needs
   - Analyze app store rankings and trends
   - Mine Reddit, Product Hunt, reviews for pain points
   - Output: `docs/research/YYYY-MM-DD-trends.md`

2. **Opportunity Analysis** (opportunity-analyst agent)
   - Score all opportunities (100-point scale)
   - Disqualify overlaps with PORTFOLIO
   - Deep dive on top 5 with revenue estimates
   - Output: `docs/research/YYYY-MM-DD-shortlist.md`

3. **STOP** — Wait for human to choose an opportunity

## Execution

```
Read CLAUDE.md for context.

If theme provided: "$ARGUMENTS"
Focus research on this category/theme.

Otherwise: broad search across all categories.

Run trend-researcher agent first.
When complete, run opportunity-analyst agent.

End with shortlist and explicit STOP.
Human chooses before Phase 2.
```
