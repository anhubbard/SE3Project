echo >> log.log
sudo docker image build -t service:v0.1 .
sudo docker container run -d -p80:80 service:v0.1
