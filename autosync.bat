@echo off
title ForbTech GitHub Auto-Sync
color 0A
echo ===================================================
echo   Starting ForbTech Auto-Sync...
echo   This window will push changes to GitHub every 5 minutes.
echo   Just keep this window minimized in the background!
echo ===================================================

:loop
echo.
echo [%time%] Checking for changes...

:: Check if there are any git changes
git status --porcelain > "%temp%\git_status.txt"
for /f %%i in ("%temp%\git_status.txt") do set size=%%~zi

if %size% EQU 0 (
    echo [%time%] No changes detected. Sleeping for 5 minutes...
) else (
    echo [%time%] Changes detected! Uploading to GitHub...
    git add .
    git commit -m "Auto-sync update"
    git push
    echo [%time%] Upload successful!
)

:: Wait 300 seconds (5 minutes)
timeout /t 300 /nobreak > NUL
goto loop
