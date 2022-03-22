#!/bin/bash

PROTO_DIR=./proto

npx grpc_tools_node_protoc --js_out=import_style=commonjs,binary:${PROTO_DIR} --grpc_out=${PROTO_DIR} -I ./proto proto/*.proto

npx grpc_tools_node_protoc --ts_out=${PROTO_DIR} -I ./proto proto/*.proto