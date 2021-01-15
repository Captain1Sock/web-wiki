---
title: 'Hooks'
---

# Hooks

## useState

## useEffect

## useMemo
```javascript
  const gameName = currentGame?.name;

  // Avoid header image rerender when platform has changed.
  const HeaderImage = useMemo(() => {

  	return <CardHeader attribute={gameName} />;

  }, [gameName]); //Only rerender when gameName changed
```