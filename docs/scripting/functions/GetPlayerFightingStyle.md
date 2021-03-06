---
id: GetPlayerFightingStyle
title: GetPlayerFightingStyle
description: Get the fighting style the player currently using.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Get the fighting style the player currently using.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player to get the fighting style of. |

## Returns

The ID of the fighting style of the player.

## Examples

```c
if (GetPlayerFightingStyle(playerid) == FIGHT_STYLE_NORMAL)
{
    SendClientMessage(playerid,0xFFFFFFAA,"You are using normal fighting style!");
}
```

## Related Functions

- [SetPlayerFightingStyle](SetPlayerFightingStyle): Set a player's fighting style.
