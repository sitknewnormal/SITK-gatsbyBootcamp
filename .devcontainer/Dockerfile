FROM debian:latest

# Persist bash history between runs
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo $SNIPPET >> "/root/.bashrc"

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
    && apt-get install -y curl \
    && apt-get -y autoclean

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 14.15.4

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install Git and setup SITK local Git account
RUN apt-get -y install git \
    && source ~/.bashrc \
    && git config --global user.name "Sharing Is The Key" \
    && git config --global user.email "sitknewnormal@gmail.com"

# Install Gatsby CLI
RUN npm install -g gatsby-cli

# Install SASS support for the Gatsby project
RUN npm install gatsby-plugin-sass node-sass

# A simple node program for executing commands using an environment from an env file.
RUN npm install --save-dev env-cmd

# A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.
RUN npm install gatsby-source-filesystem

# Parses Markdown files using Remark (https://remark.js.org/).
RUN npm install gatsby-transformer-remark

# Exposes several image processing functions built on the Sharp image processing library
RUN npm install gatsby-plugin-sharp 

# Processes images in markdown so they can be used in the production build.
RUN npm install gatsby-remark-images 

# Convert image src(s) in markdown/html/frontmatter to be relative to their node's parent directory
RUN npm install gatsby-remark-relative-images

# Source plugin for pulling content types, entries, and assets into Gatsby from Contentful spaces. It creates links between entry types and asset so they can be queried in Gatsby using GraphQL.
# Use this specific version because it allows us to get the post body in JSON format, which easier
RUN npm install gatsby-source-contentful@2.3.56

# React renderer for the Contentful rich text field type.
RUN npm install @contentful/rich-text-react-renderer

# Provides drop-in support for server rendering data added with React Helmet.
RUN npm install gatsby-plugin-react-helmet

# This reusable React component will manage all of your changes to the document head.
RUN npm install react-helmet