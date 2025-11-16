const notesData = [
    {
        id: 1,
        title: "Linux Commands",
        date: "10/27/2025",
        content: `ctrl + : to increase the size of the font

hostname : gives the name of the user or the host that we are using

shell:sh  is a space where we can run the commands on your machine

secure shell:ssh to connect to the server and to run commands in the server

ssh -p <port_num> username@<server_name or ip-address> : to connect to the server

Example: ssh -p 15551 endeavour3@endeavourtech.ddns.net

Different types of shells: bash, fish, zsh`
    },
    {
        id: 2,
        title: "File & Directory Commands",
        date: "10/27/2025",
        content: `pwd – Prints the current working directory.
ls – Lists files and directories.
ls -ltr – Lists files sorted by modification time (newest last), showing details.
cd <dir> – Changes to the specified directory.
cd .. – Moves one directory level up.
mkdir <dir> – Creates a new directory.
mkdir -p project/{data,log,scripts} – Creates nested directories in one command.
rmdir <dir> – Removes an empty directory.
cp file1 file2 – Copies file1 to file2.`
    },
    {
        id: 3,
        title: "Shell Scripting",
        date: "10/29/2025",
        content: `A shell = an interface between you and the kernel (the core of Linux)

Unix built by Bell Systems which is an enterprise, i.e, is a license version, not open source

IBM AIX - some changes to unix and released

HP Unix - some changes made by them

Linux is open source

In Linux:
  - Red Hat Enterprise Edition (RHEL) - liquid version
  - Ubuntu - open source
  - Fedora - community edition`
    },
    {
        id: 4,
        title: "Shell Scripts Examples",
        date: "10/29/2025",
        content: `RANDOM is a special Bash variable that generates a pseudo-random integer between 0 and 32767 each time you use it.

thirdscript.sh:
#!/bin/bash
#mkdir -p /home/endeavour3/carmodel/{car1,car2,car3}
touch /home/endeavour3/carmodel/car1/file1.txt
echo "random text in the text file" >> /home/endeavour3/carmodel/car1/file1.txt

forthscript.sh:
#!/bin/bash
model=hummer`
    },
    {
        id: 5,
        title: "Network Commands",
        date: "10/29/2025",
        content: `curl - Client URL
A powerful, versatile command-line tool used for transferring data to or from a server. 
Supports: HTTP, HTTPS, FTP, FTPS, SCP, SFTP, LDAP, and more.

Key functions:
  - Downloading files: curl -O https://example.com/file.zip

wget - Download files from web servers or FTP servers

nslookup - DNS lookups

telnet - Network protocol

ping - Test connectivity

dig - DNS lookup utility

ssh - Secure Shell
ssh keys - For secure authentication`
    },
    {
        id: 6,
        title: "GIT - Version Control",
        date: "10/29/2025",
        content: `git -v = gives version number
Example: git version 2.51.2.windows.1

Source Control - Old examples: CVS or VSS (Visual Studio Safe)
They block code blocks from other users when 1 user is modifying it.

Git: Distributed source control or version control

Git tracks the changes and not the version

git config --global user.email - Configure email

Key features:
  - Tracks changes
  - Distributed version control
  - Allows multiple users to work simultaneously`
    },
    {
        id: 7,
        title: "IT Roles and Responsibilities",
        date: "10/29/2025",
        content: `DevOps Engineer

Infrastructure Admin / Systems Engineer:

1) Network Admin:
  - Internet connectivity
  - VPN (Virtual Private Network) management
  - Example: 172.25.30.1/8 - 65k IPs

2) System Admin:
  - Add OS to VMs
  - Knows how many systems/VMs are procured by network engineering

3) Middleware Admin:
  - Middleware technologies:
    * WebSphere - IBM
    * WebLogic - Oracle
    * Tomcat - Apache
    * JBoss - Red Hat
  - Virtualization (1 VM to 100 JVMs)`
    },
    {
        id: 8,
        title: "String Operators & Conditionals",
        date: "10/29/2025",
        content: `String Operators:
[ STRING1 = STRING2 ] - Checks if strings are equal
[ STRING1 != STRING2 ] - Checks if strings are not equal
[ STRING1 = STRING2 ] - Contains substring checks

Examples:
[ "abcd" = "abc" ] - If string1 is exactly equal to string2 (true)
[ "abc" = ab[cd] ] - If 3rd character is c or d (true)
[ "abc" < "bcd" ] - Alphabetical comparison (true)

Conditional Logic:
[ COND1 ] && [ COND2 ] - AND operator
[[ COND1 && COND2 ]] - AND operator (double bracket)
[ COND1 ] || [ COND2 ] - OR operator
[[ COND1 || COND2 ]] - OR operator (double bracket)

Example:
[ A -gt 4 && A -lt 10 ] - If A is greater than 4 and less than 10`
    },
    {
        id: 9,
        title: "File Test Operators",
        date: "10/29/2025",
        content: `-d <file>: Returns true if the file exists and is a directory.
  Example: if [ -d "/path/to/dir" ]

-e <file>: Returns true if the file or directory exists.
  Example: if [ -e "/path/to/file_or_dir" ]

-f <file>: Returns true if the file exists and is a regular file (not a directory).
  Example: if [ -f "/path/to/file" ]

-r <file>: Returns true if the file exists and is readable.
  Example: if [ -r "/path/to/file" ]

-w <file>: Returns true if the file exists and is writable.
  Example: if [ -w "/path/to/file" ]

-x <file>: Returns true if the file exists and is executable.
  Example: if [ -x "/path/to/file" ]

-s <file>: Returns true if the file exists and is not empty (size > 0).
  Example: if [ -s "/path/to/file" ]

-L <file>: Returns true if the file exists and is a symbolic link.
  Example: if [ -L "/path/to/symlink" ]

-p <file>: Returns true if the file exists and is a named pipe (FIFO).
  Example: if [ -p "/path/to/named_pipe" ]`
    }
];
