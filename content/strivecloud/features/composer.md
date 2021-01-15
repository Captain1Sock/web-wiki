---
title: 'Composer'
---


# Admin

## Composer management bar (on composer pages)
- TODO: 

## Composer Pages Overview (/admin/composers/pages)
A list with all existing composer pages:
- ComposerOverview.js (the overview page)
- SingleComposerPage.js  (A single composer page item in overview page)

## Composer Admin "Manage Page" Overview
The manage page modal
- ComposerManager.js -> wrapper
- NewContentBlock.js -> grid of available content blocks

## Composer Manager blocks fields
Every block has:
- 5 toggles (automatically available in database)
- 10 String fields (automatically available in database)
- Block-id 
- Composer-id -> == ?page id?

# Add new composer type

## Composer option
- In api/updates/functions.js -> add new object in "blockTypesToInsert"
- In Postman run the update function
- Added to table "block" in db

## Composer option dialog
- Create a new file [component]Fields.js with the block-specific options.
- AddBlockForm.js (on open new block)
- EditBlockForm.js (on edit existing block)


# View

## Rendering a Composer page
1. ComposerPage.js: wrapper for admin, content
2. Composer.js: show desktop or mobile view
3. SingleComponserBlock.js: Render the specific block type