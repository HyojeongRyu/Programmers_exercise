SELECT COUNT(*) AS FISH_COUNT
FROM FISH_INFO
WHERE COALESCE(LENGTH,0) <= 10.0