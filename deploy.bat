start build.bat
set deployPath=\\intranet4\c$\inetpub\modern\vuex-testing
set localDistFolder=%cd%\dist
REM set localDistFolder=C:\Development\BranchLocation\dist
TIMEOUT /T 14

REM ******* BEING VERY SPECIFIC ABOUT THE DIRECTORIES AND FILES TO DELETE BECAUSE 
REM ******* I DON'T WANT TO RISK A RUNAWAY DELETE COMMAND ON INTRANET4.

rmdir /s /q %deployPath%\css
rmdir /s /q %deployPath%\img
rmdir /s /q %deployPath%\js
del /F /q %deployPath%\favicon.ico
del /F /q %deployPath%\index.html
xcopy /s /y "%localDistFolder%" "%deployPath%"
