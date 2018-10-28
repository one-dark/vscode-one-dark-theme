# Source: https://gist.github.com/skeltonm/916f697a41e32c16dcd5dcab1513b091

import boto3


def main():
    client = boto3.client('route53')

    # Get list of zones
    zones = client.list_hosted_zones()['HostedZones']

    for zone in zones:
        # Get the record sets for the current zone
        record_sets = client.list_resource_record_sets(HostedZoneId=zone['Id'])['ResourceRecordSets']

        # Search for the string "staging" in each record set
        for record_set in record_sets:
            if 'staging' in record_set['Name']:
                print('Found: ' + record_set['Name'])


if __name__ == '__main__':
    main()
