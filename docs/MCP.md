# MCP development workflow

Date: 25 October 2026.

Host: Codex desktop. The host's MCP client connects to configured MCP servers. A Stitch MCP server would expose design capabilities to that client. MCP is a development tool here; no MCP client, server, or chatbot is part of the shipped dashboard.

## Actual inspection

The agent searched the session's available tool metadata for `stitch` in tool names and descriptions. The result was an empty list: no Stitch tool is exposed in this session. This was a local tool-catalog inspection, not a Stitch server call and not an authentication error.

No project listing or design retrieval call was possible. No Stitch tool name, project ID, server response, successful-call screenshot, or connection success is claimed. Unrelated configured servers do not establish a Stitch connection.

## Fallback used

The assignment text and reviewed PRD supplied the requirements. With no user-supplied Stitch export or screenshot, the agent created a local responsive design and captured its actual browser output. See DESIGN.md and evidence/. This is an additional limitation: the fallback has no Stitch design provenance and does not complete the required Stitch design exercise.

Manual exports/screenshots supply visual context, but do not demonstrate communication between an MCP client and a Stitch server. They cannot prove MCP access.

## Remaining external step

Create/refine the design in Stitch and retain genuine before/after evidence. If connecting MCP, follow the current official instructions for the actual client, keep authentication in private configuration, inspect actual exposed tools, and record the exact real call and returned result. If access remains blocked, retain this limitation and supply a genuine exported design or screenshot instead. Do not commit API keys or include them in screenshots.

## Browser fallback attempt

The official Stitch URL was opened in the in-app browser. Repeated accessibility observations showed only the page and an embedded frame; the visible page remained blank with no usable design controls. See evidence/stitch-unavailable.png. No project was created and no authentication or billing change was made. Prepared handoff prompts are in STITCH-HANDOFF.md.
