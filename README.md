# ISSS webShell

This repository houses the source code of the official [Information & Systems Security Society website](https://www.isss.io). 

Although the webShell is a static (plain HTML) site, the source code is compartmentalized using [Handlebars](http://handlebarsjs.com/) and built using [Gulp](http://gulpjs.com/). This makes it simple for contributors to update site content, without having to modify a single large HTML file.

## Developer Setup

To make your own build, make sure you have the latest versions of Node.js (4+) and NPM (3+) installed. Then, clone the repository and install the dependencies:

    npm install
    npm install -g gulp
    
Once you make changes to the files in the `src` directory, build the site by running

    gulp
    
The built/compiled/minified site will be available in the `dist` directory. Open `dist/index.html` to view the site. Because the webShell is a static site, it can be served directly from the filesystem.

## Administrator Notes

#### Installing/Renewing SSL/TLS Certificate
https://www.namecheap.com/support/knowledgebase/article.aspx/9446/0/apache-opensslmodsslnginx

## License

Copyright 2016 Information & Systems Security Society.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

### Dependency Licences

This project uses the Meslo font, available [here](https://github.com/andreberg/Meslo-Font). Meslo is copyrighted by André Berg and is licensed under the Apache License, Version 2.0. You may obtain a copy of the Apache License [here](http://www.apache.org/licenses/LICENSE-2.0).