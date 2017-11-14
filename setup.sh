#!/bin/bash
cp port-tester-ping-udp.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable port-tester-ping-udp.service
systemctl start port-tester-ping-udp.service