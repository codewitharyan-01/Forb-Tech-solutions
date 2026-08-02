@echo off
title ForbTech GitHub Auto-Sync
color 0A
echo ===================================================
echo   Starting ForbTech Auto-Sync...
echo   This window will push changes to GitHub every 2 minutes.
echo   Just keep this window minimized in the background!
echo ===================================================

:loop
echo.
echo [%time%] Checking for changes...

:: Check if there are any uncommitted file changes
git status --porcelain > "%temp%\git_status.txt"
for /f %%i in ("%temp%\git_status.txt") do set size=%%~zi

if %size% GTR 0 (
    echo [%time%] Changes detected! Committing locally...
    git add .
    git commit -m "Auto-sync update" > NUL
)

:: Always attempt to push (this catches manual commits we made that haven't been pushed)
git push > "%temp%\git_push.txt" 2>&1
findstr /C:"Everything up-to-date" "%temp%\git_push.txt" > NUL
if %errorlevel% EQU 0 (
    echo [%time%] Everything is up to date. Sleeping for 2 minutes...
) else (
    echo [%time%] Uploaded new updates to GitHub!
)

:: Wait 120 seconds (2 minutes)
timeout /t 120 /nobreak > NUL
goto loop
