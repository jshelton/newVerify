#!/bin/sh

# Look for syncCode file

# if exists then look for folder with sync code



SYNCCODE=$(cat /Volumes/Photo\ SD\ 1/syncCode);

DEST=$(find /Volumes/Seagate\ Pictures\ 8TB/Import -iname "$SYNCCODE" );

DEST=${DEST%/*}


DATE="$(date '+%Y-%m-%d' )"; DEST_VOL="/Volumes/Seagate Pictures 8TB"; DEST_PARENT_DIR="${DEST_VOL}/Import"; DEST_DIR="${DEST_PARENT_DIR}/${DATE}"; mkdir -m 0777 -p "$DEST_DIR"; chflags nohidden "${DEST_PARENT_DIR}"/*; pushd /Volumes; rsync -RavzP --exclude 'mediaConsistency.db' --exclude '.DS_STORE' --exclude 'leinfo.sav' --no-perms --no-owner --exclude '.*' --backup-dir=version_$(date "+%Y-%m-%bd-%H%M") ./*/DCIM "$DEST_DIR"; chflags nohidden "${DEST_PARENT_DIR}"/*; popd
