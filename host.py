#!/usr/bin/python3
import os
import socket
import http.server
import socketserver
from sys import argv

print()
print('='*80)
print(' STARTING LOCAL SERVER '.center(80,'-'))
print('='*80)

print('LOCAL: ', os.getcwd())

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(('8.8.8.8',1))
ip = s.getsockname()[0]
print('HOST: ', ip)

PORT = int(argv[1]) if len(argv) > 1 else 8000
print('PORT: ', PORT)
print('='*80)
print()

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer((ip,PORT), Handler)
httpd.serve_forever()
