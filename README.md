# ScrutinyX

### AI-Powered Legal Assistance Platform — UI/UX Design Specification

> *Making legal help feel approachable, reliable, and easy — without losing an ounce of credibility.*

---
To run the setup:


## Table of Contents

1. [Overview](#overview)
2. [Target Users](#target-users)
3. [Core Features](#core-features)
4. [Design Philosophy](#design-philosophy)
5. [Visual Design System](#visual-design-system)
6. [Layout & Navigation](#layout--navigation)
7. [Pages](#pages)
8. [Key Components](#key-components)
9. [Accessibility & Trust](#accessibility--trust)
10. [Responsive Behavior](#responsive-behavior)
11. [Disclaimer](#disclaimer)

---

## Overview

ScrutinyX is an AI-powered legal assistance platform that translates dense legal language into plain, actionable guidance. It combines a conversational legal assistant, automated document analysis, and a searchable law/case database into a single dashboard-style product.

The interface has to do two things at once:

- **Feel approachable** to someone who has never read a contract in their life.
- **Feel credible** to a law student or small-business owner who needs to trust the output.

Every design decision in this document is in service of that balance.

## Target Users

| User | What they need |
|---|---|
| **Law students** | Fast case/law lookup, clean citations, ELI5 explanations for study |
| **Individuals** | Plain-language answers to everyday legal questions, no jargon |
| **Startups & small businesses** | Contract review, risk flags, quick turnaround, data privacy |

## Core Features

### 1. Legal Query Assistant
Chat-based interface for asking legal questions in plain language and receiving AI-generated explanations, with the option to cite sources.

### 2. Document Analysis
Upload legal documents (PDF/DOC) to receive summaries, key clause extraction, and risk highlights (color-coded by severity).

### 3. Case & Law Search
Searchable database of laws, statutes, sections, and past case references, filterable by jurisdiction, date, topic, and court level.

### 4. Explain Like I'm 5 (ELI5) Mode
A persistent toggle available across chat and document views that rewrites legal jargon into everyday language.

### 5. Privacy-First Design
Persistent, visible trust indicators (encryption status, data retention policy, "not stored" badges) rather than privacy buried in a settings page.

---

## Design Philosophy

- **Clean over clever.** Legal users are risk-averse; the UI shouldn't be either.
- **Confidence through clarity.** White space, clear hierarchy, and generous line-height over dense walls of text.
- **Approachable, not casual.** Friendly microcopy and rounded UI elements, but no cartoonish illustration or slang.
- **Trust is a design element**, not just a policy page — security and sourcing cues appear inline, at the point of use.

## Pages

### 1. Landing Page
- Hero section: value proposition headline + subheading + primary CTA (**"Ask a Legal Question"**) and secondary CTA (**"Upload a Document"**)
- Feature grid (4 cards): Legal Chat, Document Analysis, Law Search, ELI5 Mode — icon + short copy each
- "How it works" 3-step visual (Ask → Analyze → Understand)
- Trust section: privacy/security highlights, disclaimer note, testimonials or "Built for students, startups & individuals"
- Footer with links, social proof, and a final CTA banner

### 2. User Dashboard
- Welcome header with quick-start CTAs: **"Ask a Legal Question"**, **"Upload Document"**, **"Search Laws"**
- Recent activity cards: last chats, last analyzed documents, saved searches
- Usage/plan summary card
- Quick tips or "Legal term of the day" widget (optional, reinforces approachability)

### 3. AI Legal Chat Page
- Familiar two-pane layout: conversation history sidebar (left) + active chat (center)
- Chat bubbles: user (navy) vs. AI (neutral surface with gold "AI" badge)
- Inline citations rendered as pill-style tags linking to Law Search
- ELI5 toggle pinned at the top of the chat pane — switching it re-simplifies the current answer
- Input bar with attachment icon (jumps to Document Analysis), send button, and a subtle "AI can make mistakes — verify with a professional" note

### 4. Document Analysis Page
- Drag-and-drop upload zone (dashed border, document icon, "PDF or DOC, up to Xmb")
- Upload progress bar with filename + cancel option
- Results view (post-analysis):
  - **Summary** panel (plain-language overview)
  - **Key Clauses** accordion list
  - **Risk Highlights** — color-coded tags (green/amber/red) mapped to the palette above, with hover tooltips explaining the risk
  - Toggle to view original document text side-by-side with annotations
  - Export/download summary as PDF button

### 5. Law Search Page
- Prominent search bar with autosuggest
- Filter panel (left or top): jurisdiction, date range, court level, topic/category
- Results list: case name, citation (monospace), short excerpt, relevance tag
- Result detail drawer/modal with full text, related cases, and an ELI5 toggle for the case summary

### 6. Settings / Privacy Page
- Account settings (profile, plan, notifications)
- **Privacy & Security section** (elevated, not buried): data retention policy, document deletion controls, encryption status, download-my-data / delete-my-data actions
- Appearance: light/dark mode selector
- Legal disclaimer and terms/privacy policy links

---

## Accessibility & Trust

- WCAG AA minimum contrast in both light and dark modes
- All risk indicators paired with icon + text label, never color alone
- Keyboard-navigable chat and search interfaces
- Every AI-generated answer visibly labeled as AI-generated, with a persistent, non-intrusive reminder that ScrutinyX does not replace a licensed attorney

## Responsive Behavior

- **Desktop (≥1024px):** Full sidebar + multi-column layouts (chat history + chat, filters + results)
- **Tablet (768–1023px):** Collapsible sidebar (icon-only), single-column content
- **Mobile (<768px):** Sidebar becomes a bottom nav or slide-over drawer; chat and document views become full-screen, single-focus flows

## Disclaimer

ScrutinyX provides AI-generated legal information for educational and informational purposes. It is not a substitute for advice from a licensed attorney.